import { ShoppingOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer } from 'antd';
import React, { useState } from 'react'
import "../App.css"

const Header = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className = "web-header" >
    <div className='container header-section bg-black text-white'>
      <div >
        <h2>
        Products Store 
        </h2>
      </div>
      <div className="cart-section">
        <Badge count={15}>
          <Button type="primary" onClick={showDrawer}>
              <ShoppingOutlined />
          </Button>
        </Badge>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
      </Drawer>
      </div>
    </div>
    </div>
  )
}

export default Header
