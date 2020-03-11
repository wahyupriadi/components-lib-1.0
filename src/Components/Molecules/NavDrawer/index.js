import React, { useState, useEffect } from "react";
import { Wrapper, LeftContent, RightContent, List, ListItem } from "./styled";
import Icon from "../../Atom/Icon";
import Text from "../../Atom/Text";

const NavDrawerMap = (obj, itemLevel, itemClick, expandClick) => {
  const { children, key, active, open } = obj;
  return (
    <React.Fragment key={key}>
      {children.length > 0 ? (
        <>
          <ListItem
            parent
            data-key={key}
            level={itemLevel}
            onClick={expandClick}
            open={open}
            active={active}
          // to={obj.link}
          >
            <LeftContent>
              {obj.icon.length !== 0 && (
                <Icon name={obj.icon} size="large" fillColor={"black50"} />
              )}
            </LeftContent>
            <Text H12 lineHeight="24px">
              {obj.label}
            </Text>
            <RightContent data-key={key}>
              <Icon
                name={obj.open ? "chevron-up" : "chevron-down"}
                size={12}
                fillColor={"black70"}
              />
            </RightContent>
          </ListItem>
          <List isOpen={obj.open}>
            {children.map(item => {
              const level = itemLevel + 1;
              return NavDrawerMap(item, level, itemClick, expandClick);
            })}
          </List>
        </>
      ) : (
          <ListItem
            data-key={key}
            level={itemLevel}
            onClick={itemClick}
            active={active}
          // to={obj.link}
          >
            <LeftContent>
              {obj.icon.length !== 0 && (
                <Icon
                  name={obj.icon}
                  size="large"
                  fillColor={active ? "white" : "black50"}
                />
              )}
            </LeftContent>
            <Text H12 lineHeight="24px" className="nav-drawer-item__text">
              {obj.label}
            </Text>
          </ListItem>
        )}
    </React.Fragment>
  );
};

const NavDrawer = props => {
  const { tree, activeNav, onClickNav } = props;
  const [NavDrawerTree, setNavDrawerTree] = useState(tree);

  useEffect(() => {
    ItemClick(NavDrawerTree, activeNav, 'default');
  }, [activeNav]);

  const ItemClick = (list, key, action) => {
    list.map(item => {
      if (item.key === key) {
        item.active = true;
        checkParent(NavDrawerTree, item.parent);
        action === 'click' && onClickNav(item);
        return list;
      } else {
        item.active = false;
        return ItemClick(item.children, key, action);
      }
    });
    setNavDrawerTree([...list]);
  };

  // const resetList = list => {
  //   list.map(item => {
  //     item.active = false;
  //     item.open = false;
  //     return list;
  //   });
  // };

  const checkParent = (list, parent) => {
    list.map(item => {
      if (item.key === parent) {
        // resetList(list);
        item.active = true;
        item.open = true;
        item.parent && checkParent(NavDrawerTree, item.parent)
      } else {
        item.children && item.children.length && checkParent(item.children, parent)
      }
      return item;
    });
  };

  const ExpandClick = (list, key) => {
    // resetList(list);
    list.map(item => {
      if (item.key === key) {
        item.open = !item.open;
        return list;
      } else {
        return ExpandClick(item.children, key);
      }
    });
    setNavDrawerTree([...list]);
  };

  const handleItemClick = event => {
    const key = event.target.dataset.key;
    ItemClick(NavDrawerTree, key, 'click');
  };

  const handleExpandClick = event => {
    const key = event.target.dataset.key;
    ExpandClick(NavDrawerTree, key);
  };

  return (
    <Wrapper className={props.className}>
      <List isOpen={true}>
        {tree.map(item => {
          const level = 0;
          return NavDrawerMap(
            item,
            level,
            e => handleItemClick(e),
            e => handleExpandClick(e)
          );
        })}
      </List>
    </Wrapper>
  );
};

export default NavDrawer;
