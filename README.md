# hover-dropdown-menu

A function for creating dropdown menus.

The first parameter is the visibile element classname and the second is the hidden list element classname.

Example:

HTML:
<ul class="navbar">
    <li>
        <button class="nav-item about">About</button>
        <ul class="dropdown dropdown-about">
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
        </ul>
    </li>
</ul>

JavaScript:
hoverDropDown('about', 'dropdown-about');