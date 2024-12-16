# Supabase related

## Setup

```
supabase init
```

## Run on local

```
supabase start            # docker demon이 실행되고 있어야됨.
supabase functions serve  # edge functions
```

anon key와 url 확인

```
supabase status
```

## supabase functions deploy

```
supabase functions deploy
```

## Connect

https://supabase.com/docs/guides/local-development/overview

```
supabase login
supabase link --project-ref <project-id>
```

## Pull from remote

```
supabase db pull                # schema가 변경되었으면 migration file 생성된다.
supabase db pull --schema auth  # auth schema 적용
supabase migration up           # migration 적용
```

## Push to remote

```
supabase db push
```

### Android

remove android gradle cache

```
rm -rf ~/.gradle/caches
rm -rf ~/.gradle/daemon
rm -rf ~/.gradle/wrapper
```

### Android device

```
adb devices
```
