SELECT DISTINCT a.user AS usuario,
IF(MAX(YEAR(g.data_jogo)) >= '2021', 'Usuário ativo', 'Usuário inativo')
AS status_usuario
FROM SpotifyClone.usuario AS a
INNER JOIN SpotifyClone.historico AS g
ON a.id_usuario = g.id_usuario
GROUP BY a.user
ORDER BY a.user
