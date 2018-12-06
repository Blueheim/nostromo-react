import React from 'react'
import 'nostromo-css/css/style.css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import App from '../components/Layout/App'
import Header from '../components/Layout/Header'
import Main from '../components/Layout/Main'
import Footer from '../components/Layout/Footer'
import Section from '../components/Layout/Section'
import Bar from '../components/Layout/Bar'
import Modal from '../components/Layout/Modal'

import Button from '../components/Button/Button'
import Link from '../components/Link/Link'
import Image from '../components/Image/Image'

import Nav from '../components/Navigation/Nav'
import NavLogo from '../components/Navigation/NavLogo'
import NavSearch from '../components/Navigation/NavSearch'
import NavActions from '../components/Navigation/NavActions'
import NavAction from '../components/Navigation/NavAction'
import NavLink from '../components/Navigation/NavLink'

import Control from '../components/Control/Control'
import Input from '../components/Control/Input'

import logo from '../../assets/img/logo-black.svg'

const MarginDecorator = storyFn => <div className='m-margin-md'>{storyFn()}</div>

storiesOf('Layout', module)
  .addDecorator(withInfo)
  .add('Configuration 1', () => (
    <App full>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
//   .add('Configuration 2', () => (
//     <App full config="2">
//       <Bar grey1>Bar</Bar>
//       <Header primary>Header</Header>
//       <Main secondary>Main</Main>
//       <Footer tertiary>Footer</Footer>
//     </App>
//   ))
//   .add('Configuration 3', () => (
//     <App full config="3">
//       <Bar grey1>Bar</Bar>
//       <Header primary>Header</Header>
//       <Main secondary>Main</Main>
//       <Footer tertiary>Footer</Footer>
//     </App>
//   ))
//   .add('Configuration 4', () => (
//     <App full config="4">
//       <Bar left grey1>
//         Left Bar
//       </Bar>
//       <Bar right grey1>
//         Right Bar
//       </Bar>
//       <Header primary>Header</Header>
//       <Main secondary>Main</Main>
//       <Footer tertiary>Footer</Footer>
//     </App>
//   ))
// .add('Configuration 5', () => (
//   <App full config='5'>
//     <Bar grey1>Bar</Bar>
//     <Header primary>Header</Header>
//     <Main secondary>Main</Main>
//     <Footer tertiary>Footer</Footer>
//   </App>
// ))
//   .add('Configuration 6', () => (
//     <App dense full config="6">
//       <Bar left grey1>
//         Left Bar
//       </Bar>
//       <Bar right grey1>
//         Right Bar
//       </Bar>
//       <Header primary>Header</Header>
//       <Main secondary>Main</Main>
//       <Footer tertiary>Footer</Footer>
//     </App>
//   ))
//   .add('Configuration 7', () => (
//     <App dense full config="7">
//       <Bar grey1>Bar</Bar>
//       <Header primary>Header</Header>
//       <Main secondary>Main</Main>
//       <Footer tertiary>Footer</Footer>
//     </App>
//   ))
//   .add('Configuration 8', () => (
//     <App dense full config="8">
//       <Bar grey1>Bar</Bar>
//       <Header primary>Header</Header>
//       <Main secondary>Main</Main>
//       <Footer tertiary>Footer</Footer>
//     </App>
//   ))
//   .add('Modal', () => (
//     <Modal>
//       <div className="m-primary--reverse">TEST</div>
//     </Modal>
//   ));

// storiesOf('Section', module)
//   .addDecorator(withInfo)
//   .add('Simple', () => (
//     <App full>
//       <Main>
//         <Section simple>
//           <div className="m-primary">Div 1</div>
//           <div className="m-secondary">Div 2</div>
//           <div className="m-tertiary">Div 3</div>
//         </Section>
//       </Main>
//     </App>
//   ))
//   .add('Auto', () => (
//     <App full>
//       <Main>
//         <Section auto>
//           <div className="m-primary">Div 1</div>
//           <div className="m-secondary">Div 2</div>
//           <div className="m-tertiary">Div 3</div>
//         </Section>
//       </Main>
//     </App>
//   ));

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(MarginDecorator)
  .add('Basic', () => <Button>Click</Button>)
  .add('Primary', () => <Button primary>Click</Button>)
  .add('Secondary', () => <Button secondary>Click</Button>)
  .add('Tertiary', () => <Button tertiary>Click</Button>)
  .add('Valid', () => <Button valid>Click</Button>)
  .add('Invalid', () => <Button invalid>Click</Button>)
  .add('Info', () => <Button info>Click</Button>)
  .add('Alert', () => <Button alert>Click</Button>)
  .add('Rounded', () => (
    <Button primary rounded-ty>
      Click
    </Button>
  ))
  .add('With border', () => <Button border-ty>Click</Button>)

// storiesOf('Link', module)
//   .addDecorator(withInfo)
//   .add('Button', () => <Button tagName="a">Click</Button>);

// storiesOf('Navigation', module)
//   .addDecorator(withInfo)
//   .add('Basic', () => (
//     <div className="m-margin-xt--bottom">
//       <Nav>
//         <NavLogo title="Nostromo">
//           <Image className="logo" src={logo} alt="logo" />
//         </NavLogo>
//         <NavSearch />
//         <NavActions>
//           <NavAction>
//             <NavLink href="#">Link 1</NavLink>
//           </NavAction>
//           <NavAction>
//             <NavLink href="#">Link 2</NavLink>
//           </NavAction>
//           <NavAction>
//             <NavLink href="#">Link 3</NavLink>
//           </NavAction>
//           <NavAction>
//             <NavLink href="#">Link 4</NavLink>
//           </NavAction>
//         </NavActions>
//       </Nav>
//     </div>
//   ))
//   .add('Primary', () => (
//     <div className="m-margin-xt--bottom">
//       <Nav primary>
//         <NavLogo title="Nostromo">
//           <Image className="logo" src={logo} alt="logo" />
//         </NavLogo>
//         <NavSearch />
//         <NavActions>
//           <NavAction>
//             <NavLink href="#">Link 1</NavLink>
//           </NavAction>
//           <NavAction>
//             <NavLink href="#">Link 2</NavLink>
//           </NavAction>
//           <NavAction>
//             <NavLink href="#">Link 3</NavLink>
//           </NavAction>
//           <NavAction>
//             <NavLink href="#">Link 4</NavLink>
//           </NavAction>
//         </NavActions>
//       </Nav>
//     </div>
//   ));

storiesOf('Input', module)
  .addDecorator(withInfo)
  .addDecorator(MarginDecorator)
  .add('Basic', () => (
    <>
      <Control>
        <Input placeholder='Rechercher' />
      </Control>
      <Control>
        <Input placeholder='Rechercher' primary />
      </Control>
      <Control>
        <Input placeholder='Rechercher' secondary />
      </Control>
      <Control>
        <Input placeholder='Rechercher' tertiary />
      </Control>
    </>
  ))
  .add('With buttons', () => (
    <>
      <Control>
        <Button primary>
          <i className='fa fa-search icon' />
        </Button>
        <Input info placeholder='Rechercher' />
      </Control>
      <Control>
        <Button primary>
          <i className='fa fa-search icon' />
        </Button>
        <Input info placeholder='Rechercher' />
        <Button secondary>
          <i className='fa fa-search icon' />
        </Button>
      </Control>
      <Control>
        <Input info placeholder='Rechercher' />
        <Button secondary>
          <i className='fa fa-search icon' />
        </Button>
      </Control>
    </>
  ))

storiesOf('Select', module)
  .addDecorator(withInfo)
  .addDecorator(MarginDecorator)
  .add('Basic', () => (
    <>
      <Control>
        <Input placeholder='Rechercher' />
      </Control>
    </>
  ))
