import {
    JsonTree,
    ADD_DELTA_TYPE,
    REMOVE_DELTA_TYPE,
    UPDATE_DELTA_TYPE,
    DATA_TYPES,
    INPUT_USAGE_TYPES,
} from 'react-editable-json-tree'
import React from 'react';
// Data
const data = {
    error: new Error('error'),
    text: 'text',
    int: 100,
    boolean: true,
    null: null,
    object: {
        text: 'text',
        int: 100,
        boolean: true,
    },
    array: [
        1,
        {
            string: 'test',
        },
    ],
}

// Component

const editableTreeComponent =() => {
    return (
        <JsonTree data={data} />
    );
}
export default editableTreeComponent;