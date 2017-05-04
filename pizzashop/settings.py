"""
Django settings for pizzashop project.

Generated by 'django-admin startproject' using Django 1.10.5.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.10/ref/settings/
"""
from os.path import normpath, join

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'p9!v&vp04-1rtrp3lxt5dou+tbpx(-)%7tz(lo11d82qeqkt9n'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

########## AUTH CONFIGURATION
AUTH_USER_MODEL = "profiles.User"
AUTHENTICATION_BACKENDS = [
    'social.backends.facebook.FacebookAppOAuth2',
    'profiles.facebook.auth.CustomFacebookOAuth2',
    'rest_framework_social_oauth2.backends.DjangoOAuth2',
    'django.contrib.auth.backends.ModelBackend',
    'profiles.backend.EmailAuthBackend'
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    ### libraries ###
    'django_extensions',
    'rest_framework',
    'rest_framework_swagger',
    'oauth2_provider',
    'social.apps.django_app.default',
    'rest_framework_social_oauth2',
    'social_django',
    'corsheaders',
    ### project apps ###
    'pizzas.apps.PizzasConfig',
    'profiles.apps.ProfilesConfig'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.BrokenLinkEmailsMiddleware',
    'django.middleware.locale.LocaleMiddleware'
]

ROOT_URLCONF = 'pizzashop.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'static/templates')]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'pizzashop.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'es-es'
ugettext = lambda s: s
LANGUAGES = (
    ('en', ugettext('English')),
    ('es', ugettext('Spanish')),
)

LOCALE_PATHS = (
    normpath(join(BASE_DIR, 'locale')),
)

TIME_ZONE = 'Europe/Madrid'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'
# STATIC_ROOT = os.path.join(BASE_DIR, "assets")
STATIC_ROOT = 'staticfiles'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'dist/static'),
    os.path.join(BASE_DIR, "static"),
]
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

# Media files

MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
MEDIA_URL = '/media/'

# DJANGO REST FRAMEWORK CONFIGURATION
# ------------------------------------------------------------------------------
# See: http://www.django-rest-framework.org/
# See: https://django-oauth-toolkit.readthedocs.io

# Validation Token for API
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'oauth2_provider.ext.rest_framework.OAuth2Authentication',
        'rest_framework_social_oauth2.authentication.SocialAuthentication',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 100
}

OAUTH2_PROVIDER = {
    # this is the list of available scopes
    'SCOPES': {
        'read': 'Read scope',
        'write': 'Write scope',
    }
}

# DJANGO REST FRAMEWORK SOCIAL OAUTH2
# ------------------------------------------------------------------------------
# See: https://github.com/PhilipGarnero/django-rest-framework-social-oauth2

PROPRIETARY_BACKEND_NAME = 'Facebook'

# Facebook configuration
SOCIAL_AUTH_FACEBOOK_KEY = "1796735767253135"
SOCIAL_AUTH_FACEBOOK_SECRET = "644f6e29aa4c6a2c991b3bf9fcad6b86"
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'locale': 'es_ES',
    'fields': 'id, name, email'
}

# Define SOCIAL_AUTH_FACEBOOK_SCOPE to get extra permissions from facebook.
# Email is not sent by default, to get it, you must request the email permission:
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']


CORS_ORIGIN_WHITELIST = (
    'alfatecsistemas.es',
)
