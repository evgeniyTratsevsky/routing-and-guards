```
canActivate: [HighPriorityGuard, LowPriorityGuard]
```

## Выполнение гардов

Гарды запускаются параллельно.

- Если **LowPriorityGuard** возвращает `UrlTree` или `false` первым, то роутер всё равно будет дожидаться выполнения **HighPriorityGuard** перед началом навигации.
- Если **HighPriorityGuard** возвращает первым `UrlTree`, то навигация будет сразу произведена на этот `UrlTree`.
- Если **LowPriorityGuard** возвращает `UrlTree` первым, а затем **HighPriorityGuard** также возвращает `UrlTree`, навигация произойдёт на `UrlTree` из **HighPriorityGuard**, так как побеждает более высокий приоритет.

- Если **HighPriorityGuard** возвращает `true` первым, роутер будет ждать **LowPriorityGuard**, так как не может производить навигацию, пока не убедится, что все гарды вернули `true`.
