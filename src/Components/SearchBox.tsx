import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Ingredients from '../Files/Ingredients.json'
import { Paper } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface SearchBoxProps {
    setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
    chipColor:{
      text: string;
      background: string;
      border: string;
    };
    searchColor:{
      text: string;
      background: string;
      border: string;
    }
}

function SearchBox(props: SearchBoxProps ) {
    return (
        <Autocomplete
        multiple
        id="tags-outlined"
        options={Ingredients}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        disableCloseOnSelect
        renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
        onChange={(event: any, newValue: string[]) => {
            props.setIngredients(newValue);
          }}
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip 
              variant="filled" 
              sx={{
                backgroundColor: props.chipColor.background, 
                borderColor: props.chipColor.border,
                color: props.chipColor.text
              }} 
              label={option} 
              {...getTagProps({ index })} 
            />
          ))
        }
        PaperComponent={({ children }) => (
          <Paper sx={{ backgroundColor: props.searchColor.background, opacity: 0.9}}>{children}</Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ingredients"
            variant="outlined"
          />
        )}
        sx={{ width:"80%", backgroundColor: props.searchColor.background, opacity: 0.9,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: '1px solid ' + props.searchColor.border
        },
        "& label.Mui-focused": {
          color: props.searchColor.text
        }}}
      />
    );
  }
  
  export default SearchBox;