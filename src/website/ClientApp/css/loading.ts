import styled, { keyframes, StyledFunction } from "styled-components";
import * as Model from "../models/Contacts";

const LoadingComponent: StyledFunction<Model.DefaultCellProps & React.HTMLProps<HTMLInputElement>> = styled.div;
const LoaderRotate = keyframes`
            to {
                transform: rotate(360deg);
            }
        `;

export const StyledLoading = LoadingComponent`
            z-index: 999;
            content: '';
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            border-top: 2px solid #07d;
            border-right: 2px solid transparent;
            border-radius: 50%;
            animation: ${LoaderRotate} 0.6s linear infinite;
            width: 1.4rem;
            height: 1.4rem;
            margin-top: -0.7rem;
            margin-left: -0.7rem;
            border-top-width: 2px;
            border-right-width: 2px;
            width: 33px;
            height: 33px;
            margin-top: -15px;
            margin-left: -10px;
            border-top-width: 3px;
            border-right-width: 3px;
            border-top-color: #716aca;
        `;
