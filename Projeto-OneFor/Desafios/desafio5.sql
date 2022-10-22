SELECT d.cancao_name AS cancao,
COUNT(m.id_usuario)AS reproducoes
FROM SpotifyClone.historico AS m
INNER JOIN SpotifyClone.cancoes AS d
ON m.id_cancao = d.id_cancao
GROUP BY cancao
ORDER BY reproducoes DESC, cancao ASC
LIMIT 2;