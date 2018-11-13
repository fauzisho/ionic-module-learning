# Start New Project


## Customize Ionic Default Theme Colors

home.html:
```
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <button ion-button block color="primary">Default/Primary</button>
  <button ion-button block color="secondary">Secondary</button>
  <button ion-button block color="danger">Danger</button>
  <button ion-button block color="light">Light</button>
  <button ion-button block color="dark">Dark</button>
  <button ion-button block color="custom">Custom</button>
</ion-content>

```

variables.scss :
```
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  custom:     #e2be1c,
  dark:       #222
);
```

## Run Your Apps

```
ionic serve
```
or to show device layout using : 


```
ionic serve --lab
```

## Reference
Get started with Ionic (<https://ionicframework.com/getting-started#cli>)
