import { S as ScenaProps, a as ScenaFunctionComponent, E as Editor } from './Editor-c92ba88b.js';
import { IObject } from '@daybrush/utils';
import 'react-moveable';
import 'react';
import 'react-infinite-viewer';
import '@scena/react-guides';
import 'react-selecto';
import '@egjs/component';
import 'moveable-helper';
import 'scenejs';
import 'shortcuts';

declare function makeScenaFunctionComponent<T = IObject<any>>(id: string, component: (props: ScenaProps & T) => React.ReactElement<any, any>): ScenaFunctionComponent<T>;

export { Editor as default, makeScenaFunctionComponent };
