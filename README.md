#Steps

## 1 Install laravel from curl command line with mysql and devcontianer

```bash
curl -s "https://laravel.build/example-app?with=mysql&devcontainer" | bash
```

## 2 Add alias to bashrc

```bash
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
```

## 3 Start container
```bash
sail up -d
```

## 4 Run migration
```bash
sail php artisan migrate
```