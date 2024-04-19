import { StyledTitle } from './Styles';

const Title = props => {

    return (
        <StyledTitle style={props.style}>
            {props.children}
        </StyledTitle>
    );
};

export default Title 
