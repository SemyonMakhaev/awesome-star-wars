import React, { ChangeEvent, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import throttle from 'lodash.throttle';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';

export function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = useCallback(throttle((event: ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.target;

    const newSearchParams: Record<string, string> = name ? { name } : {};

    setSearchParams(newSearchParams);
  }, 100), [setSearchParams]);

  return (
    <TextField
      fullWidth
      id="filter-input"
      placeholder="Search for character"
      value={searchParams.get('name')}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon fontSize="small">
              <SearchIcon />
            </SvgIcon>
          </InputAdornment>
        ),
      }}
      variant="standard"
      onChange={onChange}
    />
  );
}
