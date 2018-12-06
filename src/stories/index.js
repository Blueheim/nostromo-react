import React from 'react'
import 'nostromo-css/css/style.css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import AppLayout from '../components/Layout/AppLayout'
import HeaderLayout from '../components/Layout/HeaderLayout'
import MainLayout from '../components/Layout/MainLayout'
import FooterLayout from '../components/Layout/FooterLayout'
import SectionLayout from '../components/Layout/SectionLayout'
import BarLayout from '../components/Layout/BarLayout'
import ModalLayout from '../components/Layout/ModalLayout'

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
    <AppLayout full>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 2', () => (
    <AppLayout full config='2'>
      <BarLayout info>BarLayout</BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 3', () => (
    <AppLayout full config='3'>
      <BarLayout info>BarLayout</BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 4', () => (
    <AppLayout full config='4'>
      <BarLayout left info>
        Left BarLayout
      </BarLayout>
      <BarLayout right info>
        Right BarLayout
      </BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 5', () => (
    <AppLayout full config='5'>
      <BarLayout info>BarLayout</BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 6', () => (
    <AppLayout full config='6'>
      <BarLayout left info>
        Left BarLayout
      </BarLayout>
      <BarLayout right info>
        Right BarLayout
      </BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 7', () => (
    <AppLayout full config='7'>
      <BarLayout info>BarLayout</BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 8', () => (
    <AppLayout full config='8'>
      <BarLayout info>BarLayout</BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('Configuration 9', () => (
    <AppLayout full config='9'>
      <BarLayout info>BarLayout</BarLayout>
      <HeaderLayout primary>HeaderLayout</HeaderLayout>
      <MainLayout secondary>MainLayout</MainLayout>
      <FooterLayout tertiary>FooterLayout</FooterLayout>
    </AppLayout>
  ))
  .add('ModalLayout', () => (
    <ModalLayout>
      <div className='m-primary--reverse'>TEST</div>
    </ModalLayout>
  ))

// storiesOf('SectionLayout', module)
//   .addDecorator(withInfo)
//   .add('Simple', () => (
//     <AppLayout full>
//       <MainLayout>
//         <SectionLayout simple>
//           <div className="m-primary">Div 1</div>
//           <div className="m-secondary">Div 2</div>
//           <div className="m-tertiary">Div 3</div>
//         </SectionLayout>
//       </MainLayout>
//     </AppLayout>
//   ))
//   .add('Auto', () => (
//     <AppLayout full>
//       <MainLayout>
//         <SectionLayout auto>
//           <div className="m-primary">Div 1</div>
//           <div className="m-secondary">Div 2</div>
//           <div className="m-tertiary">Div 3</div>
//         </SectionLayout>
//       </MainLayout>
//     </AppLayout>
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
