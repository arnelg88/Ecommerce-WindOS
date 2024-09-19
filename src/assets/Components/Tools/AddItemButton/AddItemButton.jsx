import React, { useMemo } from 'react';
import { Button, notification, Space } from 'antd';
import { ShoppingCart } from '@mui/icons-material';

const Context = React.createContext({
  name: 'Default',
});

const AddItemButton = ({ onClick }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Notificación`,
      description: (
        <Context.Consumer>
          {({ name }) => `Se agrego tu producto correctamente al carrito de compras`}
        </Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(
    () => ({
      name: 'WindOS',
    }),
    [],
  );

  const handleClick = () => {
    openNotification('topRight');
    if (onClick) {
      onClick(); 
    }
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
        <Button
          type="primary"
          className="AddCart"
          onClick={handleClick}
        >
          <ShoppingCart />
        </Button>
    </Context.Provider>
  );
};

export default AddItemButton;
