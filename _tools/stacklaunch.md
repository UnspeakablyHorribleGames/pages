---
title: StackLaunch
group: Windows
order: 3
platform: Windows 10 and 11
status: Download coming
summary: "A slim bar on the edge of your screen that turns your shortcut folders into menus, dressed in whatever colors your dark heart desires, so your desktop can stay empty."
---
Some of us like a clean desktop: no clutter, no shortcuts, nothing staring back. But we still need to reach HUNDREDS of shortcuts, most of them games, and the Start Menu is, let's say, insufficient. Several other launchers were tried, found wanting, and quietly buried (names withheld to protect the guilty). So we rolled our own, and here it is.

Dress it however your dark heart desires: any colors, any fonts, buttons flat, raised, gradient, or glossy, docked to whichever edge of whichever screen you like. Give every category its own color, from bruise purple to arterial red, or leave the whole thing in mourning black.

## Requirements

Windows 10 or 11. StackLaunch runs on Windows PowerShell and the .NET Framework, both of which come with Windows; there's nothing else to install.

## Using it

- Click a category to open its menu, and click it again to close it. Click an item to launch it.
- Folders inside a category show as submenus.
- The three small buttons at the end of the bar are settings, help, and close. Right-click the bar for settings, the source folder, or Exit.

## Where the menus come from

- You pick a source folder. Every folder inside it is a category, and its name is the button's label.
- Add, remove, or rename a folder and the bar updates at once. Menus are read fresh each time they open.
- Only shortcuts launch: `.lnk` files, and `.url` links of the allowed kinds (http, https, steam). Anything else in a folder is listed greyed out with the reason, and never run.

## Settings

The settings window has four sections. Click a section title to open it, and again to close it.

- **Source:** the folder whose subfolders are the categories.
- **Dock:** screen and edge. "Fit the buttons" floats over windows, placed left, center, or right (top, middle, or bottom on a side edge). "Full edge" can reserve its strip, like the taskbar.
- **Bar Options:** bar colors, font, size, padding, and border radius; button shape, style (flat, raised, gradient, or glossy), border, padding, and gap. Buttons size to their label, or set "Button size along the bar" for identical buttons.
- **Category Options:** menu font, the menu theme for categories without a color, a color per category, and "Menu max items," which caps how many items a menu shows at once (default 10). Longer menus split into columns or scroll.

Settings are saved in `bar.ini` next to `stacklaunch.ps1`.

## Starting and stopping

- **Start:** make a shortcut that runs this command in the StackLaunch folder, and pin it to the taskbar for one-click access:

  ```
  conhost.exe --headless powershell.exe -NoProfile -STA -ExecutionPolicy Bypass -File stacklaunch.ps1
  ```

- **Stop:** Exit from the right-click menu, or run `stop.ps1`.
- `stacklaunch.log`, next to `stacklaunch.ps1`, records each start and close and any error. Look there if the bar disappears.

## Your data

StackLaunch runs entirely on your PC. It sends nothing anywhere.

## License

Free, under the MIT License: provided as is, with no warranty.
