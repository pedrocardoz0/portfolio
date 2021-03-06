import React from 'react';
import styled from 'styled-components';
import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Panel
} from 'react95';

export default {
    title: 'Window',
    component: Window,
    subcomponents: { WindowHeader, WindowContent },
    decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: teal;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ___CSS_0___;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
export const Default = () => (
    <>
        <Window className='window'>
            <WindowHeader active={false} className='window-header'>
                <span>not-active.exe</span>
            </WindowHeader>
            <WindowContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ex. Vestibulum vulputate risus vel ante venenatis, ut eleifend felis pulvinar. Pellentesque congue commodo sapien, at sollicitudin odio eleifend sit amet.
            </WindowContent>
        </Window>
    </>
);

Default.story = {
    name: 'default'
};