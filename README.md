# File Selector Component Project

## Project Description

You are tasked with building a File Selector component for a web application (see screenshot below). This component should allow users to browse and select files from a hierarchical data structure similar to the one provided:

```json
[
  {
    "name": "src",
    "type": "folder",
    "children": [
      {
        "name": "data",
        "type": "folder",
        "children": [
          {
            "name": "index.js",
            "type": "file"
          }
        ]
      },
      {
        "name": "index.js",
        "type": "file"
      },
      {
        "name": "index.css",
        "type": "file"
      }
    ]
  },
  {
    "name": "state.ts",
    "type": "file"
  }
]
```

## Screenshot example

![screenshot](./screenshot.png)

## Project Requirements

### Display the File Structure:

- Build a user interface that displays the hierarchical file structure provided above.
- Use icons or visual indicators to differentiate between folders and files.

### Folder Navigation:

- Users should be able to expand and collapse folders by clicking on them to view or hide their contents.

### File Selection and File Information:

- Allow users to select a file by clicking on it and logs the respective file path.

## Additional time?

### Breadcrumbing

- Implement a breadcrumb navigation bar to show the current path within the file structure.
