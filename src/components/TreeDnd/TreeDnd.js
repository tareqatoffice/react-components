import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const arrayData = [
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'Meat' }] },
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'Meat' }] },
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'Meat' }] },
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'Meat' }] },
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'Meat' }] },
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'Meat' }] },
];

const TreeDnd = () => {
    const [data, setData] = useState(arrayData);
    console.log(data);
    return (
        <div style={{ height: 400 }}>
            <SortableTree
                treeData={data}
                onChange={(data)=>setData(data)}
                isVirtualized={false}
            />
        </div>
    );
};

export default TreeDnd;