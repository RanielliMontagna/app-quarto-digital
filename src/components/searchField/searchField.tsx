import { TextField } from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import { ISearchField } from './searchField.types';

const SearchField = ({ placeholder, handleSearch, id }: ISearchField) => {
  return (
    <TextField
      size="small"
      id={id ?? 'search'}
      variant="outlined"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <div style={{ display: 'flex', alignItems: 'center', width: '32px' }}>
            <HiOutlineSearch size={18} />
          </div>
        ),
        style: {
          height: '36px',
          fontSize: '14px',
        },
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => e.target.select(),
      }}
    />
  );
};

export default SearchField;
