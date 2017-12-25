import aiopg.sa
import sqlalchemy as sa

__all__ = ['question', 'choice']

meta = sa.MetaData()

question = sa.Table(
    'question', meta,
    sa.Column('id', sa.Integer, nullable=False),
    sa.Column('question_text', sa.String(200), nullable=False),
    sa.Column('pub_date', sa.Date, nullable=False),

    # Indexes
    sa.PrimaryKeyConstraint('id', name='question_id_pkey'))

choice = sa.Table(
    'choice', meta,
    sa.Column('id', sa.Integer, nullable=False),
    sa.Column('question_id', sa.Integer, nullable=False),
    sa.Column('choice_text', sa.String(200), nullable=False),
    sa.Column('votes', sa.Integer, server_default="0", nullable=False),

    # Indexes
    sa.PrimaryKeyConstraint('id', name='choice_id_pkey'),
    sa.ForeignKeyConstraint(['question_id'], [question.c.id],
                            name='choice_question_id_fkey',
                            ondelete='CASCADE'),
)


async def init_pg(app):
    conf = app['config']['postgres']
    print(conf)
    engine = await aiopg.sa.create_engine(
        # database=conf['database'],
        # user=conf['user'],
        # password=conf['password'],
        # host=conf['host'],
        # port=conf['port'],
        # minsize=conf['minsize'],
        # maxsize=conf['maxsize'],
        user='postgres',
        database='postgres',
        host='0.0.0.0',
        password='postgres',
        loop=app.loop)
    print(engine)
    app['db'] = engine

async def close_pg(app):
    app['db'].close()
    await app['db'].wait_closed()














