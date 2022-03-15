### Components

- Logo
- Avatar

```
Header
  Logo
  Avatar
Documents
  UploadDocument
  ListDocuments
    Avatar
AddDocument
  FormSignatories
```

## Store

### documents

```
{
  document: {
    binary: null,
    signatories: {
      email: '',
      name: '',
      rfc: '',
    },
    loading: true,
  },
  list: {
      filters: {
        status: all,
        page: 1,
        perPage: 1,
      },
      loading: false,
      table: {
        data: [],
      },
    }
}
```

### user

```
{
  user:{
    name:'',
    email:'',
    avatar:''
  }
}
```

### alert

```
{
  alert: { type: null, message: [] },
  error: null,
}
```
