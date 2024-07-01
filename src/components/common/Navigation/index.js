import React from 'react';
import { NavLink } from 'react-router-dom';

import { sidebarMainMenu, sidebarDropRoutes } from 'components/constants';

const Navigation = () => {
  const openAccordion = (id) => {
    const accordionId = document.getElementById(id);
    return accordionId.classList.contains('is-accordion-open')
      ? accordionId.classList.remove('is-accordion-open')
      : accordionId.classList.add('is-accordion-open');
  };
  return (
      <nav className="navigation">
        <ul className="navigation-list">
          {sidebarMainMenu.map((navItem) => {
            const {
              path, id, text, icon, dropMenu
            } = navItem;
            const icons = `icon ${icon}`;
            const accordionId = `accordion${id}`;
            return (
              <li
                className="navigation-item "
                key={id}
                id={dropMenu ? accordionId : null}>
                <NavLink
                  to={path}
                  className="navigation-link "
                  activeClassName="is-active"
                  onClick={() => (dropMenu ? openAccordion(accordionId) : null)
                  }>
                  <span className={icons} aria-hidden="true"></span>
                  <span>{text}</span>
                </NavLink>
                {!!dropMenu && (
                  <ul className="drop-menu">
                    {sidebarDropRoutes.map((dropItem) => {
                      const { pathName, dropId, linkText } = dropItem;
                      return (
                        <li className="drop-item" key={dropId}>
                          <NavLink
                            to={pathName}
                            className="drop-link"
                            activeClassName="is-active">
                            <span>{linkText}</span>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Navigation;
