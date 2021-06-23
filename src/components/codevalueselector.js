import React from 'react'

import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

// Get the single content of the object for inclusion into the main object
const getContent = (codeVal, selected, allSelected) => {
  //console.log('>> getContent ', codeVal, selected);
  // add the single selected element into the resulting object
  if (codeVal.subkeys && codeVal.subkeys.includes(selected)) {
    const sub = processCodeVal(
      codeVal[selected],
      allSelected
    );
    //console.log('≫≫ sub ', sub);
    return sub;
  } else {
    return codeVal[selected];
  }
};

// get a list of content for inclusion into the main object
const getContentList = (codeVal, selected, allSelected) => {
  //console.log('++ getContentList() ', codeVal, selected);
  if (Array.isArray(selected)) {
    // return a list of everything to be added
    return selected.map(k => {
      return getContent(codeVal, k, allSelected);
    });
  } else {
    return [];
  }
  
};

const processCodeVal = (codeVal, allSelected) => {
  //console.log('-- processCodeVal() ', codeVal);
  return Object.keys(codeVal).reduce((result, key) => {
    //console.log('==', codeVal[key]);
    if (codeVal[key].type === 'checkbox') {
      // process a list
      const vals = getContentList(codeVal[key], allSelected[key], allSelected)
        .filter(v => v !== undefined);
      //console.log('== vals ', vals);
      if (vals.length > 0) {
        
        // combine all return values
        result[key] = vals.reduce((result, e) => {
          if (e) {
            return {...result, ...e};
          }
        }, {});
      }
    } else if (codeVal[key].type === 'picklist') {
      // process a list
      const vals = getContentList(codeVal[key], allSelected[key], allSelected)
        .filter(v => v !== undefined);
      //console.log('== vals ', vals);
      if (vals.length > 0) {
        // combine all return values in one array
        result[key] = vals;
      }
    } else {
      // process a single-selection
      const content = getContent(codeVal[key], allSelected[key], allSelected);
      // copy over the value content
      result[key] = content;
    }
    return result;
  }, {});
};


const CodeValueSelector = ({...props}) => {
  return Object.keys(props.codeValues).map((field) => {
        {
          if (props.codeValues[field].subkeys && (props.codeValues[field].type === 'checkbox' || props.codeValues[field].type === 'picklist')) {
            // it's got subkeys AND it's a pickilst or checkbox
            
            const subs = props.selected[field]
              .filter((s) => props.codeValues[field].subkeys.includes(s))
              .reduce((result, selected) => {
              const selectedSubs = Object.keys(props.codeValues[field][selected]).map((f) => {
                return(
                  <Selector onChange={props.change(f)} 
                    label={props.codeValues[field][selected][f].label} 
                    selected={props.selected[f]} 
                    options={props.codeValues[field][selected][f].options} 
                    type={props.codeValues[field][selected][f].type} />
                );
              });
              return result.concat(selectedSubs);
            }, []);
            
            
            return (
              <>
              <Selector onChange={props.change(field)} label={props.codeValues[field].label} selected={props.selected[field]} options={props.codeValues[field].options} type={props.codeValues[field].type} />
              <SelectorList>
                {subs}
              </SelectorList>
              </>
            );

          } else if (props.codeValues[field].subkeys && props.codeValues[field].subkeys.includes(props.selected[field])) {
            // if it's got sub-keys, process them here
            const subs = Object.keys(props.codeValues[field][props.selected[field]]).map((f) => {
              return(
                <Selector onChange={props.change(f)} 
                  label={props.codeValues[field][props.selected[field]][f].label} 
                  selected={props.selected[f]} 
                  options={props.codeValues[field][props.selected[field]][f].options} 
                  type={props.codeValues[field][props.selected[field]][f].type} />
              );
            });
            
            return (
              <>
              <Selector onChange={props.change(field)} label={props.codeValues[field].label} selected={props.selected[field]} options={props.codeValues[field].options} type={props.codeValues[field].type} />
              <SelectorList>
                {subs}
              </SelectorList>
              </>
            );
            
          } else {
            return (
              <Selector onChange={props.change(field)} label={props.codeValues[field].label} selected={props.selected[field]} options={props.codeValues[field].options} type={props.codeValues[field].type} />
            );
          }
        }
    })
    // add the "all" selector
    .concat(<Selector onChange={props.change('all')} label="All" all options={props.options} />);
};

export { processCodeVal, CodeValueSelector };