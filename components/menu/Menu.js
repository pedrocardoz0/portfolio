import React, { Component, useState } from 'react';
import { Menu } from "semantic-ui-react"
import { useRouter } from 'next/router'

function MenuComponent() {
    const router = useRouter();

    const handleItemClick = (e, { name, end }) => {
        router.push(end);
    };

    return (
        <Menu secondary>
            <Menu.Item
                end="/"
                name="Home"
                onClick={handleItemClick}
            />

            <Menu.Item
                end="/skills"
                name="Habilidades"
                onClick={handleItemClick}
            />

            <Menu.Item
                end="/about"
                name="Serviços"
                onClick={handleItemClick}
            />
        </Menu>
    );
}

export default MenuComponent;