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

```
{
  user:{
    name:'',
    email:'',
    avatar:''
  },
  document: {
    binary: null,
    signatories: {
      email: '',
      name: '',
      rfc: '',
    }
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
