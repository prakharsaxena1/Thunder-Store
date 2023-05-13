import React, { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));
export const SearchBarNew: FC = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onKeyPress={(e) => {
          if (e.key === 'Enter' && text !== '') {
            navigate(`/search/${text}`);
          }
        }}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBarNew;
