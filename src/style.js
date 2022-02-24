import styled from 'styled-components';
import { Table } from '../../common/Table/style';
export const TableWrapper = styled(Table)`
    thead {
        tr {
            th{
                &:first-child, &:last-child {
                    text-align: left;
                }
                &:first-child{
                  width: 20%;
                }
                font-family: ProximaNovaAltBold;
            }
        }
    }
    tbody {
        tr {
            td {
                &:first-child, &:last-child {
                    text-align: left;
                }
                text-align: center;
                &.bg-priceperbed{
                    background-color: rgba(65,117,5,0.3);
                }
                &.color-blue {
                    color: #4A90E2;
                }
            }
        }
    }
`;

export const PropertyStatus = styled.span`
    width: 17px;
    height: 17px;
    background-color: ${props => props.color ? props.color : ''};
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
`
