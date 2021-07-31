import React, { SetStateAction } from 'react'
import { Dispatch } from 'react';

import DropDownPicker, { ItemType, ValueType } from "react-native-dropdown-picker";
import { theme } from '../../global/theme';

type SelectProps = {
    placeholder: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    value: ValueType | ValueType[];
    setValue: React.Dispatch<React.SetStateAction<string>> | Dispatch<any>;
    items: ItemType[];
    setItems: React.Dispatch<React.SetStateAction<any[]>>;
    multiple?: boolean;
    multipleText?: string;
    min?: number;
    max?: number;

}

export function Select(props: SelectProps) {

    return (
        <DropDownPicker
            style={{
                backgroundColor: theme.colors.selectedViolet,
                width: '100%',
                marginTop: 5,
                borderWidth: 0,
                borderRadius: 8,
                zIndex: 0,
            }}
            textStyle={{
                fontFamily: theme.fontFamily.bold,
                color: theme.colors.lightText
            }}
            placeholderStyle={{
                color: "#888"
            }}
            dropDownContainerStyle={{
                backgroundColor: theme.colors.selectedViolet,
                borderRadius: 0,
                width: '100%',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8

            }}
            placeholder={props.placeholder}
            searchable={props.searchable}
            searchPlaceholder={props.searchPlaceholder}
            setOpen={props.setOpen}
            open={props.open}
            value={props.value}
            setValue={props.setValue}
            items={props.items}
            setItems={props.setItems}
            multiple={props.multiple}
            closeAfterSelecting={true}
            min={props.min}
            max={props.max}
            multipleText={props.multipleText}
            listMode="SCROLLVIEW"
        >

        </DropDownPicker>
    )
}