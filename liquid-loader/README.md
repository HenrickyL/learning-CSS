<a href ="https://www.linkedin.com/in/henrickyl/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30" height="30" /></a> 
[![PayPal.me](https://img.shields.io/badge/paypal-donate-119fde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5EYBZRRUNZ7UA&currency_code=BRL&source=url)

# Liquid Loader Animation Effects | CSS Gooey Effects

* React.js
* styled-components
* CSS
* SVG Gooey Effects

[Reference](https://youtu.be/8ipFyy7HpqQ)


## Demo

![demonstration](Demo.gif)

## Example of use

```tsx
const Home = ()=>{
  return <Aplication>
    <h1 style={{marginRight:'50px',color:'white'}} >Normal</h1>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Loader color='red'/>
      <Loader color='green'/>
      <Loader color='blue'/>
      <Loader />
    </div>

    <h1 style={{marginRight:'50px',color:'white'}} >Reverse</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <Loader color='red' reverse/>
      <Loader color='green' reverse/>
      <Loader color='blue' reverse/>
      <Loader reverse/>
    </div>

    <h1 style={{marginRight:'50px',color:'white'}} >Linear</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <Loader color='red' linear/>
      <Loader color='green' linear/>
      <Loader color='blue' linear/>
      <Loader reverse/>
    </div>

    <h1 style={{marginRight:'50px',color:'white'}} >Core Color</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <Loader color='red'  spinColor={'#FFFF00'}/>
      <Loader color='green' spinColor={'#FFFF00'}/>
      <Loader color='blue' spinColor={'#FFFF00'}/>
      <Loader spinColor={'#FFFF00'}/>
    </div>

  </Aplication>
}
```
