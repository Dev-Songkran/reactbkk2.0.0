import React from 'react'
import styled from 'styled-components'
import { Step } from 'react-presents'
import {
  Template,
  Text,
  Image,
  Flex
} from '../Theme'

const LogoImage = styled(Image)`
  height: 120px;
` 

const LogoImageWhiteBg = styled(LogoImage)`
  background-color: #fff;
`

export default () => (  
  <Template
    section="Background at Jitta"
    title="Jitta's front-end stack"
  >
    <Flex column auto>
      <Step index={1}>
        <Flex center medvergap>
          <LogoImage smhozgap src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" />
          <LogoImage smhozgap src="https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" />
          <LogoImageWhiteBg smhozgap src="http://stylus-lang.com/img/stylus-logo.svg" />
          <LogoImage smhozgap src="https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery@2x.png" />
          <LogoImage smhozgap src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" />
        </Flex>
      </Step>
      <Step index={2}>
        <Flex center medvergap>
          <LogoImage smhozgap src="https://cdn.worldvectorlogo.com/logos/webpack.svg" />
          <LogoImage smhozgap src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" />
          <LogoImage smhozgap src="https://ucarecdn.com/cff7bbbb-c0fc-4eb9-917e-81bdae0ee8f2/" />
          <LogoImage smhozgap src="http://riotjs.com/img/logo/riot960x.png" />
        </Flex>
      </Step>
      <Step index={3} medvergap>
        <Text auto>+ A bunch of micro-libraries</Text>
      </Step>
    </Flex>
  </Template>
)
