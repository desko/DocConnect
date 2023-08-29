// import {useEffect} from 'react';
import {useEffect, useCallback, useState} from 'react';
import AsyncSelect from 'react-select/async';
// import _debounce from 'lodash/debounce';

const SearchAutocomplete = ({inputValue, selectedValue, handleInput, handleChange, fetcher}) => {
  const [loading, setLoading] = useState(false);

  const loadOptions = useCallback(async () => {
    setLoading(true);
    console.log(inputValue);
    if (inputValue.length > 3) {
      return await fetcher(inputValue).then(setLoading(false));
    }
    return [];
  }, [fetcher, inputValue]);

  // useEffect(() => {
  //   loadOptions();
  // }, [inputValue, loadOptions]);

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      isLoading={loading}
      isSearchable={true}
      value={selectedValue}
      onInputChange={handleInput}
      onChange={handleChange}
    />
  );
};

export default SearchAutocomplete;
