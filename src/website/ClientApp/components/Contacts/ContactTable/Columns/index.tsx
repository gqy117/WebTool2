/* tslint:disable:object-literal-sort-keys */
import * as React from "react";
import { Column, RowRenderProps as RRP } from "react-table";
import DefaultCell from "../Cell/DefaultCell";
import Email from "../Cell/Email";
import Gender from "../Cell/Gender";
import Phone from "../Cell/Phone";

export default class ContactColumns {
    public getColumns(): Column[] {
        const columns: Column[] = [
            {
                Header: "Name", accessor: "name", maxWidth: 80,
                Cell: (p: RRP) => <DefaultCell rowRenderProps={p} />,
            },
            {
                Header: "Gender", accessor: "gender", maxWidth: 35,
                Cell: (p: RRP) => <Gender rowRenderProps={p} />,
            },
            {
                Header: "Birthday", accessor: "birthday", maxWidth: 90,
                Cell: (p: RRP) => <DefaultCell rowRenderProps={p} />,
            },
            {
                Header: "Address", accessor: "address",
                Cell: (p: RRP) => <DefaultCell rowRenderProps={p} />,
            },
            {
                Header: "Mobile", accessor: "mobile", maxWidth: 120,
                Cell: (p: RRP) => <Phone rowRenderProps={p} />,
            },
            {
                Header: "Tel", accessor: "tel", maxWidth: 120,
                Cell: (p: RRP) => <Phone rowRenderProps={p} />,
            },
            {
                Header: "Email", accessor: "eMail", maxWidth: 150,
                Cell: (p: RRP) => <Email rowRenderProps={p} />,
            },
            {
                Header: "Date", accessor: "version", maxWidth: 160,
                Cell: (p: RRP) => <DefaultCell rowRenderProps={p} />,
            },
        ];

        return columns;
    }
}
