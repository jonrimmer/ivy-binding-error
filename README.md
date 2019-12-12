# IvyBindingError

`npm run build`

You will get the following error:

```
ERROR in Error: Internal Error: Unexpected node
```

Change `enableIvy` to `false` in `tsconfig.json`.

`npm run build`

It will work.
