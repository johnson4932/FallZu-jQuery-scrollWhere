jQuery scroll button plugin
===========================

jQuery plugin that adds "Go Back" button to a page.

* use Font Awesome
* return to top
* return to bottom
* return to custom position

[Demo Page](http://johnson4932.github.io/FallZu-jQuery-scrollWhere/)

## Installation

Include the production file after [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and jQuery.

```html
<link href="css/font-awesome.min.css" rel="stylesheet">
<script src="js/jquery-latest-version.js"></script>
<script src="js/fallzu.jquery.scrollwhere.js"></script>
```

## Usage

### HTML

Create a div element

```html
<div id="scroll-bar"></div>
```

### jQuery

Initialize the plugin

```javascript
$('#scroll-bar').scrollWhere();
```

## Options

### topBtn

Show return top button.

Default : true

### bottomBtn

Show return bottom button.

Default : true

### recordBtn

Show record button.

Default : true

### fontColor

Buttons font color

Default : #FFF

### bgColor

Buttons background color

Default : #333

### Example
```javascript
$('#scroll-bar').scrollWhere({
    bottomBtn : false
});
```
