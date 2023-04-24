import React, { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar: FC = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  return (
    <div style={{ flexGrow: 1 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        variant="outlined"
        placeholder="Search"
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            navigate(`/search/${text}`);
          }
        }}
        sx={{
          width: '100%',
          backgroundColor: '#fff',
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
