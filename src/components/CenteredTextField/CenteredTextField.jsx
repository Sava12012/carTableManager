import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

const CenteredTextField = styled(TextField)({
    display: 'flex',
    justifyContent: 'center',
    '& input:hover': {
        borderColor: 'none',
    },
    '& input:focus': {
        outline: 'none',
        borderColor: 'none',
        boxShadow: 'none',
    },
});

function SearchField({ onChange }) {
    return (
        <CenteredTextField
            label="Search"
            variant="outlined"
            onChange={onChange}
        />
    );
}

export default SearchField;
