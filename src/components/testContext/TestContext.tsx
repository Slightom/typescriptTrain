import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import { useContext } from 'react';
import { useElementsHeightsContext } from '../../contexts/ElementsHeightsContext';
import { GlobalContext, ThemeContext, useGlobalContext } from '../../contexts/GlobalContext';

const TestContext = () => {
    const { mainColor, secondColor, setMainColor, setSecondColor } = useGlobalContext();
    const { appBarHeight } = useElementsHeightsContext();
    const value = useContext(ThemeContext);

    const handleClickChangeMainColor = () => {
        const newColor = mainColor === 'orange' ? 'red' : 'orange';
        setMainColor(newColor);
    }

    const handleClickChangeSecondColor = () => {
        const newColor = secondColor === 'green' ? 'lightGreen' : 'green';
        setSecondColor(newColor);
    }

    return (
        <Grid container>
            <Grid item >
                <button onClick={handleClickChangeMainColor}>Change mainColor</button>
                <button onClick={handleClickChangeSecondColor}>Change secondColor</button>
                <p>vdsvd</p>
                <p>dupa, {mainColor}</p>
                <p>dupa, {value}</p>
                <p>AppBarHeight: {appBarHeight}</p>
            </Grid>

            <Grid item>
                <ColourfulRectangleWithText color={mainColor} text='mainColor' />
            </Grid>
            <Grid item>
                <ColourfulRectangleWithText color={secondColor} text='secondColor' />
            </Grid>
        </Grid>

    );
};

export default TestContext;

interface ColourfulRectangleProps {
    color: string;
}

const ColourfulRectangle = styled.div<ColourfulRectangleProps>`
    display: flex;
    width: 300px;
    height: 300px;
    color: black;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background-color: ${props => props.color};
`;

interface ColourfulRectangleWithTextProps extends ColourfulRectangleProps {
    text: string;
}

const ColourfulRectangleWithText = ({ color, text }: ColourfulRectangleWithTextProps) => {
    return (
        <ColourfulRectangle color={color}>
            <p>{text}</p>
        </ColourfulRectangle>
    )
}