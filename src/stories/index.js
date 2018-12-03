import React from 'react';
import 'nostromo-css/css/style.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import App from '../components/Layout/App';
import Header from '../components/Layout/Header';
import Main from '../components/Layout/Main';
import Footer from '../components/Layout/Footer';
import Section from '../components/Layout/Section';
import Bar from '../components/Layout/Bar';

import Button from '../components/Button/Button';

storiesOf('Layout', module)
  .addDecorator(withInfo)
  .add('Configuration 1', () => (
    <App full>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 2', () => (
    <App full config="2">
      <Bar grey1>Bar</Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 3', () => (
    <App full config="3">
      <Bar grey1>Bar</Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 4', () => (
    <App full config="4">
      <Bar left grey1>
        Left Bar
      </Bar>
      <Bar right grey1>
        Right Bar
      </Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 5', () => (
    <App full config="5">
      <Bar grey1>Bar</Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 6', () => (
    <App dense full config="6">
      <Bar left grey1>
        Left Bar
      </Bar>
      <Bar right grey1>
        Right Bar
      </Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 7', () => (
    <App dense full config="7">
      <Bar grey1>Bar</Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ))
  .add('Configuration 8', () => (
    <App dense full config="8">
      <Bar grey1>Bar</Bar>
      <Header primary>Header</Header>
      <Main secondary>Main</Main>
      <Footer tertiary>Footer</Footer>
    </App>
  ));

storiesOf('Section', module)
  .addDecorator(withInfo)
  .add('Simple', () => (
    <App full>
      <Main>
        <Section simple>
          <div className="m-primary">Div 1</div>
          {/* <div className="m-secondary">Div 2</div>
          <div className="m-tertiary">Div 3</div> */}
        </Section>
      </Main>
    </App>
  ))
  .add('Auto', () => (
    <App full>
      <Main>
        <Section auto>
          <div className="m-primary">Div 1</div>
          <div className="m-secondary">Div 2</div>
          <div className="m-tertiary">Div 3</div>
        </Section>
      </Main>
    </App>
  ));

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('Basic', () => <Button>Click</Button>)
  .add('Primary', () => <Button primary>Click</Button>)
  .add('Secondary', () => <Button secondary>Click</Button>)
  .add('Tertiary', () => <Button tertiary>Click</Button>);

storiesOf('Link', module)
  .addDecorator(withInfo)
  .add('Button', () => <Button tagName="a">Click</Button>);
