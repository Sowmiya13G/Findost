package com.findost;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import com.facebook.react.ReactActivity;

public class SplashActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.splash_screen);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(intent);

                finish();
            }
        }, 1000); 
    }

    @Override
    protected String getMainComponentName() {
        return "Findost"; 
    }
}
