import { ReactNode } from 'react';

export default interface IReactNode {
    children: ReactNode;
}

export interface IReactNodeProp extends IReactNode {
    sectionName: string
}

export interface ISectionProp {
    backDropSize: string;
    sectionName: string;
}