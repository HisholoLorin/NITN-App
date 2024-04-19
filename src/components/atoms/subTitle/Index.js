import { StyledSubTitle } from './Styles';

const SubTitle = props => {

    return (
        <StyledSubTitle style={props.style}>
            {props.children}
        </StyledSubTitle>
    );
};

export default SubTitle 
