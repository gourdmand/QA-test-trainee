Дана скобочная последовательность:
  <pre class="brush: js">[((())()(())]]  </pre>

Эту скобочную последовательность нельзя считать правильной,
т.к. не для каждой открывающей скобки определенного типа есть закрывающая.

Для того, чтобы эта скобочная последовательность стала правильной, можно:

1. дополнить последовательность скобками, 
недостающими для соблюдения условия парности
(для наглядности добавлены пробелы и указатели):

<pre class="brush: js">
     a.    [ ( ( ( ) ) ( ) ( ( ) )   ] ]
         [ [ ( ( ( ) ) ( ) ( ( ) ) ) ] ]
         ↑                         ↑
</pre>
<pre class="brush: js">
     b.  [ ( ( ( ) )   ( ) ( ( ) )   ] ]
         [ ( ( ( ) ) ) ( ) ( ( ) ) [ ] ]
                     ↑             ↑
</pre>
2. заменить непарные скобки на соответствующие парные
(для наглядности добавлены пробелы и указатели):

<pre class="brush: js">
    a. [ ( ( ( ) ) ( ) ( ( ) ) ] ]
       [ [ ( ( ) ) ( ) ( ( ) ) ] ]
         ↑
</pre>
<pre class="brush: js">
    b. [ ( ( ( ) ) ( ) ( ( ) ) ] ]
       [ ( ( ( ) ) ( ) ( ( ) ) ) ]
                               ↑
</pre>
