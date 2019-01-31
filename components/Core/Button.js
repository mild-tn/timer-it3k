import { Button as DefaultButton } from 'antd'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import colors from '../../config/colors'

const ButtonTimer = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.color1};
  color: #000;
  height: 156px;
  width: 223px;
  margin:2%;
  &:hover{
    background-color: ${colors.blackcurrant};
    color: #fff;
  }
`
export const ButtonEvent = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.color1};
  color: #000;
  height: 14px;
  width: 113px;
  margin:2%;
  &:hover{
    background-color: ${colors.blackcurrant};
    color: #fff;
  }
`

export default ButtonTimer