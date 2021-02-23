# js-select [![npm](http://img.shields.io/npm/v/js-select-hd.svg?style=flat)](https://badge.fury.io/js/js-select) [![Build Status](https://travis-ci.org/hoangdaicntt/js-select-hd.svg?branch=master)](https://travis-ci.org/hoangdaicntt/js-select-hd) [![Coverage Status](https://coveralls.io/repos/hoangdaicntt/js-select/badge.svg?branch=master&service=github)](https://coveralls.io/github/hoangdaicntt/js-select?branch=master)

[![NPM](https://nodei.co/npm/js-select-hd.png?downloads=true)](https://nodei.co/npm/js-select-hd/)

> The select library uses pure js for everyone. View demo [here](https://js-select.tiiny.site/)

## Features
- Super fast
- Easy to use

## Install

Install with javascript
```
<script src="dist/jsselect.js"></script>
```

Install with [npm](https://npmjs.org/package/js-select-hd)

```
npm install --save js-select-hd
```

## Usage
Js Render
```js
<script src="dist/jsselect.js"></script>
<script>
    const jsselect = new JSSelect('#js-select', [
    {id: 1, name: 'Độ tuổi'},
    {id: 2, name: 'Theo nhóm xe'},
    {id: 3, name: 'Giới tính'},
    {id: 4, name: 'Xe không có thuê bao'},
    {id: 5, name: 'Tiêu chí xe'},
    {id: 6, name: 'Tiêu chí xe 1'},
    {id: 7, name: 'Tiêu chí xe 2'},
    ], {
    placeholder: 'Chọn tiêu chí lọc',
    typing: 'Tìm kiếm tiêu chí lọc...',
    search: false, // Can select null value
    canNull: false, // Can select null value
    maxRow: 5 // Max value show
});

    jsselect.onSelected((item) => {
    console.log('Selected:', item);
    console.log('Selected ID:', jsselect.value);
})
</script>
```

Html Render
```js
<select style="width: 325px;" class="js-select" name="select-x"
        data-jsSelect="true"
        data-placeholder="Chọn tiêu chí lọc"
        data-search="true"
        data-canNull="true"
        data-maxRow="6"
        data-typing="Tìm kiếm tiêu chí lọc...">
    <option value="1">Độ tuổi</option>
    <option value="2">Theo nhóm xe</option>
    <option value="3">Giới tính</option>
    <option value="4">Xe không có thuê bao</option>
    <option selected value="5">Tiêu chí xe</option>
    <option value="6">Tiêu chí xe 1</option>
    <option value="7">Tiêu chí xe 2</option>
</select>
<script src="dist/jsselect.js"></script>
```

## Constructors

### JSSelect(textDom, arrayData, options)


#### options.placeholder

Type: `String`  
Default: `""`

#### options.typing

Type: `String`  
Default: `""`

## Events

### onSelected(callback)

## Method

### setValue(value)

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/hoangdaicntt/js-select/blob/master/CONTRIBUTING.md)

## License

MIT © [HoangDaiCntt](https://hoangdaicntt.com)
