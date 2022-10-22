SELECT  A.user As usuario,
COUNT(f.id_usuario) AS qt_de_musicas_ouvidas,
ROUND(SUM(d.segundos/60),2) AS total_minutos
FROM SpotifyClone.usuario AS A
INNER JOIN SpotifyClone.historico AS f
ON A.id_usuario = f.id_usuario
INNER JOIN SpotifyClone.cancoes AS d
ON f.id_cancao = d.id_cancao
GROUP BY A.id_usuario
ORDER BY user;

