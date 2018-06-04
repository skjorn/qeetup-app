import React, { Component } from 'react';
import ListItem from '../ListItem';

export default class List extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul className='list-group'>
                {
                    items
                        .sort((a, b) => a.points < b.points)
                        .map((item, index) => {
                            return (
                                <ListItem
                                    onRemove={() => { this.props.removeItem(item.id); }}
                                    item={item}
                                    key={item.id}
                                    order={index + 1}
                                />
                            );
                        })
                }
            </ul>
        );
    }
}
