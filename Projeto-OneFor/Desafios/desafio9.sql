SELECT COUNT(*) AS quantidade_musicas_no_historico
FROM SpotifyClone.usuario AS p
INNER JOIN SpotifyClone.historico AS j
ON p.id_usuario = j.id_usuario
WHERE p.user = 'BARBARA Liskov';